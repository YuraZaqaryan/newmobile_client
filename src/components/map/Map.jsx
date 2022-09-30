import React from 'react'
import './map.css'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const coordinates = [
  [40.178876, 44.510292],
  [40.062345, 44.442586]
];
const MapStore = ({coordinatestore}) => {
  return(
      <YMaps>
        <Map state={coordinatestore}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
  )
}
export default MapStore