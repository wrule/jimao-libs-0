'use client';

import Box from "@/components/Box";
import { useEffect, useRef } from "react";
import { main } from '@jimao/console-test';
import ABC from '@jimao/console-test';

export default function Home() {
  const flag = useRef<boolean>(true);

  useEffect(() => {
    if (flag.current) {
      flag.current = false;
      const a = new ABC('jimao nice!');
      a.show();
      main();
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box />
      </main>
    </div>
  );
}
