import React from 'react';


function DesignTopSection({ h1='', p='', src='', alt='', sections =[]}) {
    return(
        <section className="sunneyTopSection">
            {h1 && <h1 className="top-section-title">{h1}</h1>}
            {p && <p>{p}</p>}
            <img src={src} alt={alt} />

            <div className="data-about-project">
                {sections.map((section, index) => (
                    <ul key={index}>
                        <span>{section.title}</span>
                        {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                ))}
            </div>

        </section>

    );
}

export default DesignTopSection;