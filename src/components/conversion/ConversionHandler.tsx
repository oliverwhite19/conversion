import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/material/styles';

const TextArea = styled(TextField)`
    font-family: 'Rail Alphabet', Frutiger, arial, sans-serif;
    width: 100%;
    grid-column-start: 2;
    grid-row-start: 2;
    resize: none;
`;

const BiggerButton = muiStyled(Button)({
    fontSize: '2rem',
    gridColumnStart: '2',
    gridRowStart: '4',
});

const HighlightWrapper = styled.div`
    grid-column-start: 2;
    grid-row-start: 6;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    margin: 0;
    background: #f8f8f8;
    font-size: 1rem;
    pre {
        padding-left: 1rem;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-rows: 0.5rem auto 0.5rem auto 0.5rem auto;
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
                multiline
                minRows={10}
                value={text}
                onChange={(e: { target: { value: string } }): void => {
                    setText(e.target.value);
                }}
            />
            <BiggerButton variant="contained" onClick={clickHandler}>
                Convert
            </BiggerButton>
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
