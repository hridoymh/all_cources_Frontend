import React from 'react'
import { Dropdown } from 'react-daisyui'

const BtnDropd = () => {
    return (
        <div className="my-32">
          <Dropdown >
            <Dropdown.Toggle>Click</Dropdown.Toggle>
            <Dropdown.Menu className="w-52">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )
}

export default BtnDropd