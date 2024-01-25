'use client';
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

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
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
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Post</h3>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
              name='title'
              label='Title'
              placeholder='Title'
              labelPlacement='outside'
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
              name='content'
              label='Content'
              placeholder='Content'
              labelPlacement='outside'
            />
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
