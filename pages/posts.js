
import React, { Component } from 'react';
import {Link} from '../routes';


export default class extends Component {
//   static getInitialProps (props) {
//     //   console.log(props);
//     const { query: { id } }= props;
//     return { postId: id }
//   }

  render () {
    console.log(this.props);

    return <div>
      <h1>My blog post #{this.props.postId}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  }
}


export async function getServerSideProps(context) {
    // console.log(context);
    const { query: { id } }=context
    return {
      props:  { postId: id } // will be passed to the page component as props
    }
  }
  

//   return { postId: id }