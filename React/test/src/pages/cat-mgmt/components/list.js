import React from 'react';


const List = () => {
    return (
        <table class="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr class="disabled">
                    <td>Jamie</td>
                    <td>Approved</td>
                    <td>Requires call</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Selected</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td>Jamie</td>
                    <td>Approved</td>
                    <td>Requires call</td>
                </tr>
                <tr>
                    <td class="disabled">Jill</td>
                    <td>Approved</td>
                    <td>None</td>
                </tr>
            </tbody>
        </table>
    )
}
export default List;