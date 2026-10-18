'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ActionButton } from '@/components/ui/Button';

type Props = {
  email: string;
  label: string;
  copiedMessage: string;
  failedMessage: string;
};

function legacyCopy(text: string): boolean {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function CopyEmailButton({ email, label, copiedMessage, failedMessage }: Props) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        ok = true;
      } else {
        ok = legacyCopy(email);
      }
    } catch {
      ok = legacyCopy(email);
    }
    setStatus(ok ? 'copied' : 'failed');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <ActionButton variant="ghost" size="md" onClick={copy} className="border border-transparent hover:border-navy-700">
        {status === 'copied' ? (
          <Check className="h-4 w-4 text-aqua" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {label}: <span className="font-normal text-ink">{email}</span>
      </ActionButton>
      <p aria-live="polite" role="status" className="min-h-[1.5rem] text-sm text-aqua">
        {status === 'copied' ? copiedMessage : status === 'failed' ? failedMessage : ''}
      </p>
    </div>
  );
}
