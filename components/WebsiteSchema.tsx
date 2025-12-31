export default function WebsiteSchema() {
    const baseUrl = 'https://daviszinhoartgallery.vercel.app';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Davis Peñaranda Art Gallery',
        description: 'Galería de arte digital que muestra la colección única de Davis Peñaranda, con obras en óleo, acrílico, acuarela y técnica mixta.',
        url: baseUrl,
        mainEntity: {
            '@type': 'Person',
            name: 'Davis Peñaranda',
            jobTitle: 'Artista',
            description: 'Artista costarricense especializado en pintura contemporánea',
        },
        publisher: {
            '@type': 'Person',
            name: 'Davis Peñaranda',
        },
        inLanguage: ['es', 'en', 'pt', 'fr', 'it', 'de'],
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

