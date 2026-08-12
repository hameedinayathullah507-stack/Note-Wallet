import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { wedding } from '../data/wedding';

export interface MusicPlayerRef {
  startAudio: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef>((_, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthOscRef = useRef<OscillatorNode[]>([]);

  useImperativeHandle(ref, () => ({
    startAudio: () => {
      handlePlay();
    },
  }));

  const playSynthMelody = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Elegant ambient Eastern tone (D, A, D chord)
      const freqs = [146.83, 220.0, 293.66];
      synthOscRef.current = freqs.map((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        return osc;
      });
      setIsPlaying(true);
    } catch {
      // Graceful fallback
    }
  };

  const stopSynthMelody = () => {
    synthOscRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    synthOscRef.current = [];
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.65;
      audioRef.current.muted = false;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasAudioError(false);
        })
        .catch(() => {
          // If browser blocked or file missing, trigger ambient audio fallback
          playSynthMelody();
        });
    } else {
      playSynthMelody();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthMelody();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  useEffect(() => {
    // Attempt autoplay on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.65;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Browser autoplay block awaiting user tap
      });
    }

    return () => {
      stopSynthMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music}
        loop
        preload="auto"
        onError={() => setHasAudioError(true)}
      />

      {/* Floating Bottom-Right Control Button ♫ */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={toggleMusic}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          className="w-11 h-11 rounded-full border-2 border-[#B8954A] bg-[#FAF6EF]/95 text-[#7A5B18] backdrop-blur-md shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {isPlaying ? (
            <span className="font-serif font-bold text-lg leading-none animate-pulse">♫</span>
          ) : (
            <span className="font-serif text-lg leading-none opacity-60">🔇</span>
          )}
        </button>

        {hasAudioError && !isPlaying && (
          <span className="text-[10px] bg-[#FAF6EF] border border-[#B8954A]/40 text-[#7A5B18] px-2 py-1 rounded shadow-sm">
            Tap ♫ to play
          </span>
        )}
      </div>
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';
