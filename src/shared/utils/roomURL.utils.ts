export const encodeRoomEmail = (email: string): string => {
  try {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; 
    }
    
    const shortHash = Math.abs(hash).toString(36);
    
    const mappingKey = `room_${shortHash}`;
    localStorage.setItem(mappingKey, email);
    
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
    const storedEmail = localStorage.getItem(mappingKey);
    
    if (storedEmail) {
      return storedEmail;
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
    } catch {

    }

    console.warn('Could not decode room ID:', encodedId);
    return encodedId; 
  } catch (error) {
    console.error('Error decoding room ID:', error);
    return encodedId;
  }
};
