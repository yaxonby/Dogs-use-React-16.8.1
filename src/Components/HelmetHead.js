import React from 'react';
import { Helmet } from 'react-helmet';

export default class HelmetHead extends React.Component {
  render() {
    return (
<div >
<Helmet>
<meta charSet='utf-8' />
<title>Dogs picture</title>
<link rel='canonical' href='https://github.com/yaxonby/Dogs' />
</Helmet>
</div>
    );
  }
}
