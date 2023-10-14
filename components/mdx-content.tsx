import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';


function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg mx-auto pb-4" {...props} />;
}

function Header(props: any) {
  return <h1 className="text-4xl font-bold my-4 hover:underline transition ease-in-out duration-200" {...props} />;  
}

function Paragraph(props: any) {
  return (
    <>
      <p className="text-md" {...props} />
      <br />
    </>
  );
}

function CodeBlock(props: any) {
  return (
    <div className="max-w-3xl overflow-x-auto">
      <pre className="rounded-lg p-4 bg-gray-800 text-sm">
        <code {...props} />
      </pre>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  h1: Header,
  p: Paragraph,
  code: CodeBlock,
};


export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article>
      <Component components={components} />
    </article>
  );
}

export default MDXContent;