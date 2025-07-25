import React from 'react';

interface DocsPageProps {
    params: Promise<{
        slug: string[]
    }>
}

const DocsPage: React.FC<DocsPageProps> = async ({ params }) => {
    const { slug } = await params;
    return (
        <React.Fragment>
            <section>
                Catch All Segments
                {slug?.map((s, idx) => (
                    <div key={idx}> this is slug - {idx + 1} : {s} </div>
                ))}
            </section>
        </React.Fragment>
    );
};

export default DocsPage;