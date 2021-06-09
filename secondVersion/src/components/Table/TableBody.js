import React from 'react';



class TableBody extends React.Component {
    
    render() {
      const { list } = this.props;
        return (
             <tbody>
             {list.map((item, index) => {
                    return (
                        <tr key={`comment-${index}`}>
                            <td>{item.network}</td>
                            <td>{item.commenter}</td>
                            <td>{item.user}</td>
                            <td>{item.massage}</td>
                            
                        </tr>
                    );
                })}
            
          </tbody>);
    }
}

export default TableBody;