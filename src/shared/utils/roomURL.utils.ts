export const encodeRoomEmail = (email: string): string => {
  try {
    // Crear hash corto para la URL
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    const shortHash = Math.abs(hash).toString(36);   
    const base64Encoded = btoa(email)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    const mappingKey = `room_${shortHash}`;
    localStorage.setItem(mappingKey, base64Encoded);
    
    return shortHash; 
  } catch (error) {
    console.error('Error encoding room email:', error);
    return email; 
  }
};

export const encodeRoomEmailForQR = (email: string): string => {
  try {
    const base64 = btoa(email)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    return base64;
  } catch (error) {
    console.error('Error encoding room email for QR:', error);
    return email;
  }
};

export const decodeRoomId = (encodedId: string): string => {
  try {
   
    if (encodedId.includes('@')) {
      return encodedId;
    }

    const mappingKey = `room_${encodedId}`;
    const storedEncodedEmail = localStorage.getItem(mappingKey);
    
    if (storedEncodedEmail) {
      try {
        let base64 = storedEncodedEmail
          .replace(/-/g, '+')
          .replace(/_/g, '/');
        
        const padding = base64.length % 4;
        if (padding) {
          base64 += '='.repeat(4 - padding);
        }

        const decoded = atob(base64);
        if (decoded.includes('@')) {
          return decoded;
        }
      } catch (error) {
        console.warn('Error decoding stored email from localStorage:', error);
      }
    }

   
    try {
      let base64 = encodedId
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      
      const padding = base64.length % 4;
      if (padding) {
        base64 += '='.repeat(4 - padding);
      }

      const decoded = atob(base64);
      if (decoded.includes('@')) {
        return decoded;
      }
    } catch (error) {
      console.warn('Error decoding room ID directly:', error);
    }

    return encodedId; 
  } catch (error) {
    console.error('Error decoding room ID:', error);
    return encodedId;
  }
};
