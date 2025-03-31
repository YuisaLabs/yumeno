import { Button as ButtonAria } from 'react-aria-components';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Hi! From Yumeno</h1>
      <div className="mt-4 flex gap-4">
        <Button>React Custom Button</Button>
        <ButtonAria className="rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600">
          React Aria Button
        </ButtonAria>
      </div>
    </>
  );
}
