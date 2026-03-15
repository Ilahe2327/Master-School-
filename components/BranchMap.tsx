'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const BranchMap = ({ lat, lng }: { lat: number, lng: number }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })

    if (!isLoaded) return <div>Yüklənir...</div>

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={{ lat, lng }}
            zoom={15}
        >
            <Marker position={{ lat, lng }} />
        </GoogleMap>
    )
}
export default BranchMap