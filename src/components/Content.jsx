import React from 'react';

const Content = (props) => {
    return (
        <div className='content'>
            <img style={{width:"100%"}} src={props.rasm} />
            <ght style={{fontSize:"18px",fontWeight:'bold'}}>{props.children}</ght> <br />
            <abbr>{props.name}</abbr>


        </div>
    );
};

export default Content;