import React, { Component } from 'react'
import {RoomContext} from '../Context';
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
    render() {

        return (
            <div>
                 From Featured Rooms
                <Loading /> 
            </div>
        )
    }
}

