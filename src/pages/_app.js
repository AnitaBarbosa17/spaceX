import App from 'next/app';
import React from 'react';
import client from '../graphql/client';
import { ApolloProvider } from '@apollo/react-hooks';
import '../styles/global.css'

class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props;
        return (
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        )
    }
    
}

export default MyApp;