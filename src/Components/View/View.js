import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { postContext } from '../../store/DetailsContext';
import { FireBaseContext } from '../../store/CreateContext';

function View() {

const [userDetails,setUserDetails] = useState()
const {postDetails} = useContext(postContext)
const {Firebase} = useContext(FireBaseContext)

useEffect(()=>{
  const {userId} = postDetails
  Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc => {
    setUserDetails(doc.data())
    console.log(postDetails);
    });
  })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails ? postDetails.url : null}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails ? postDetails.price : null} </p>
          <span>{postDetails ? postDetails.name : null}</span>
          <p>{postDetails ? postDetails.category : null}</p>
          <span>{postDetails ? postDetails.createdAt : null}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;