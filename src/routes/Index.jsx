import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Index extends Component {



    componentDidMount
    render() {
        return (
            <div>Index</div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        auth:state.auth

    }
}

const mapDispatchToProps = dispatch =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
