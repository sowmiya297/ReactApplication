import React from 'react'

function AuthorPage(props) {
    const data = props.location.state.data;
    var myStyle = {
        border: "3px solid #73ad21",
        padding: "10px",
        textAlign: "center",
    };
    var selected = {
        width: "50%"
    }
    return (
        <div style={selected}>
            <h4> Current Selected posts information</h4>
            <div style={myStyle} className="center">
                <table>
                    <tbody>
                        <tr>
                            <th>Id </th>
                            <th>: {data.id}</th>
                        </tr>
                        <tr>
                            <th>User Id </th>
                            <th>: {data.user_id}</th>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <th>: {data.title}</th>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <th>: {data.body}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AuthorPage
