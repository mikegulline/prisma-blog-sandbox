'use client'; // <- must be added
import MarkdwonView from '@uiw/react-markdown-preview';
export default function MarkdownViewer({ source }: { source: string }) {
  return (
    <div className='markdown-body'>
      <MarkdwonView source={source} />
    </div>
  );
}
