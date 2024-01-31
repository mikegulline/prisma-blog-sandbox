'use client';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions/index';

export default function SearchInput() {
  const params = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name='term' defaultValue={params.get('term') || ''} />
    </form>
  );
}
