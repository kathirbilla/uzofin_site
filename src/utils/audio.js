export function createAudioEngine() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return { play: () => {} };

  const ctx = new AudioCtx();
  const master = ctx.createGain();
  master.gain.value = 0.16;
  master.connect(ctx.destination);

  const tone = ({ freq, slideTo, type = 'sine', duration = 0.12, attack = 0.005, gain = 1, delay = 0 }) => {
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + duration);

    env.gain.setValueAtTime(0.0001, t);
    env.gain.exponentialRampToValueAtTime(gain, t + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(env).connect(master);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  };

  const sounds = {
    click: () => {
      tone({ freq: 660, slideTo: 1320, type: 'triangle', duration: 0.1, gain: 0.55 });
    },
    hover: () => {
      tone({ freq: 2200, type: 'sine', duration: 0.035, gain: 0.08 });
    },
    toggle: () => {
      tone({ freq: 520, type: 'sine', duration: 0.08, gain: 0.4 });
      tone({ freq: 780, type: 'sine', duration: 0.1, gain: 0.4, delay: 0.07 });
    },

    intro: () => {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) =>
        tone({ freq, type: 'sine', duration: 0.55, attack: 0.02, gain: 0.3, delay: i * 0.09 }),
      );
    },
  };

  return {
    play(name) {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      sounds[name]?.();
    },
  };
}
