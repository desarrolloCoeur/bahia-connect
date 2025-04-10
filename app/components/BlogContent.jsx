export default function BlogContent({ content }) {
    return (
      <div 
        className="prose max-w-none prose-p:text-gray-700 prose-p:leading-relaxed prose-headings:text-blue-800 prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-ul:list-disc prose-ol:list-decimal"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }