import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      if (!mapRef.current) return;

      // Example coordinates for Chennai, Tamil Nadu (replace with actual location)
      const location = { lat: 13.0827, lng: 80.2707 };
      
      // @ts-ignore - Window Google Maps API
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{"saturation": "-100"}]
          },
          {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": "50"}, {"visibility": "simplified"}]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": "-100"}]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{"lightness": "30"}]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{"lightness": "40"}]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
          },
          {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{"lightness": -25}, {"saturation": -100}]
          }
        ]
      });
      
      // @ts-ignore - Window Google Maps API
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Hi-Tech UPVC Windows & Doors'
      });
      
      // @ts-ignore - Window Google Maps API
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 5px 0; color: #0e4a86; font-weight: bold;">Hi-Tech UPVC Windows & Doors</h3>
            <p style="margin: 0; font-size: 14px;">123 UPVC Avenue, Window District, Chennai</p>
            <p style="margin: 5px 0 0 0; font-size: 13px;">Open: 9:00 AM - 6:00 PM</p>
          </div>
        `
      });
      
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      
      // Open info window by default
      infoWindow.open(map, marker);
    };
    
    // Load Google Maps API dynamically
    if (!window.google?.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAFWr7NoXJmkJW9vMN86keX9eTHqQyPxVk&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      window.initGoogleMap = initMap;
      document.head.appendChild(script);
      
      return () => {
        window.initGoogleMap = undefined;
        document.head.removeChild(script);
      };
    } else {
      initMap();
    }
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[450px] rounded-lg shadow-lg overflow-hidden"
      style={{ border: '2px solid #f1f1f1' }}
    ></div>
  );
};

export default GoogleMap;