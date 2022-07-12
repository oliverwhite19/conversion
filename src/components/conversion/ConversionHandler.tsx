import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import Highlight from 'react-highlight';

const TextArea = styled.textarea`
    font-family: 'Rail Alphabet', Frutiger, arial, sans-serif;
    width: 100%;
    grid-column-start: 2;
    grid-row-start: 2;
    border-color: var(--border-color);
    border-radius: 0.5rem;
    resize: none;
`;

const Button = styled.button`
    grid-column-start: 2;
    grid-row-start: 4;
`;

const HighlightWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 6;
    border: 1px solid var(--border-color);
    margin: 0;
    background: #f8f8f8;
    pre {
        padding-left: 1rem;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 6rem auto 6rem;
    grid-template-rows: 0.5rem auto 0.5rem auto 0.5 auto;
    grid-template-columns: 1rem auto 1rem;
    @media (min-width: 600px) {
        grid-template-columns: 6rem auto 6rem;
        grid-template-rows: 1rem auto 1rem auto 1rem auto;
    }
    @media (min-width: 900px) {
        grid-template-columns: 16rem auto 16rem;
        grid-template-rows: 2rem auto 2rem auto 2rem auto;
    }
`;

const ConversionHandler: FunctionalComponent = () => {
    const [text, setText] = useState('');
    const [converted, setConverted] = useState('');
    const clickHandler = (): void => {
        try {
            setConverted(JSON.stringify(JSON.parse(text), undefined, 4));
        } catch (e) {
            setConverted('Badly formatted JSON');
        }
    };
    return (
        <Container>
            <TextArea
                rows={30}
                value={text}
                onChange={(e): void => {
                    setText(e.target.value);
                }}
            />
            <Button onClick={clickHandler}>Convert</Button>
            {converted && (
                <HighlightWrapper>
                    <pre>
                        <Highlight innerHTML className="json">
                            {converted}
                        </Highlight>
                    </pre>
                </HighlightWrapper>
            )}
        </Container>
    );
};

export default ConversionHandler;
