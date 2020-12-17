import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control 
                type="text" 
                name='q' 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder="Search Locations" 
                className='custom-search'> 
            </Form.Control>
            
        </Form>
    )
}

export default SearchBox
