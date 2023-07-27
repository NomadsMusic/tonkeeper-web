import React, { FC } from 'react';
import styled from 'styled-components';
import { Body2, Label1, Label4 } from '../Text';

export const ListItemPayload = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;
`;

export const TokenLogo = styled.img`
    width: 44px;
    height: 44px;
    border-radius: ${props => props.theme.cornerFull};

    pointer-events: none;
`;

const Description = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`;

const FirstLine = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`;

const CoinName = styled(Label1)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`;

const CoinLabel = styled(Label4)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${props => props.theme.cornerExtraExtraSmall};
    background: ${props => props.theme.backgroundContentTint};
    color: ${props => props.theme.textSecondary};
`;

const SecondLine = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Secondary = styled(Body2)`
    color: ${props => props.theme.textSecondary};
`;

const Symbol = styled(Label1)`
    color: ${props => props.theme.textSecondary};
`;

export const TokenLayout: FC<{
    name: string;
    symbol?: string;
    balance: string;
    secondary: React.ReactNode;
    fiatAmount?: string;
    label?: string;
}> = ({ name, symbol, balance, secondary, fiatAmount, label }) => {
    return (
        <Description>
            <FirstLine>
                <CoinName>
                    {symbol ?? name}
                    {label ? <CoinLabel>{label}</CoinLabel> : null}
                </CoinName>
                <Symbol></Symbol>
                <Label1>{balance}</Label1>
            </FirstLine>
            <SecondLine>
                <Secondary>{secondary}</Secondary>
                <Secondary>{fiatAmount}</Secondary>
            </SecondLine>
        </Description>
    );
};
