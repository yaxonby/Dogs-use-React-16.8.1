import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class HelmetHead extends Component {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>Dogs picture</title>
                    <link rel='canonical' href='https://github.com/yaxonby/Dogs'/>
                    <meta charset='utf-8'/>
                </Helmet>
            </div>
        );
    }
}