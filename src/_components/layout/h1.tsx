type H1Props = {
  children: React.ReactNode;
};
export default function H1({ children }: H1Props) {
  return (
    <h1 className='text-black font-black text-3xl uppercase'>{children}</h1>
  );
}
