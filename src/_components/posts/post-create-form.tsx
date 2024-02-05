'use client';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import * as actions from '@/actions/index';
import FormButton from '../common/form-button';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [markdown, setMarkdown] = useState<string>('');
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 max-w-xl'>
            <h3 className='text-lg'>Create a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
              name='title'
              label='Title'
              placeholder='Title'
              labelPlacement='outside'
            />
            <MDEditor height={200} value={markdown} onChange={setMarkdown} />
            <input name='content' type='hidden' value={markdown} />
            {!!formState.errors._form && (
              <div className='border border-red-500 bg-red-200 rounded p-2'>
                {formState.errors._form?.join(', ')}
              </div>
            )}
            <FormButton>Create a Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
