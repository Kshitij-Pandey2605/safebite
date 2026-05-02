// Mock Authentication Service for Frontend-Only Deployment
const MOCK_DELAY = 1000;

export const authService = {
  login: async (credentials) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    
    // Simulate basic validation
    if (!credentials.email || !credentials.password) {
      throw new Error("Invalid credentials");
    }

    return {
      success: true,
      user: {
        id: "usr_12345",
        name: credentials.email.split('@')[0],
        email: credentials.email,
        role: "user",
        healthPoints: 120
      },
      token: "mock_jwt_token_safebite_12345"
    };
  },
  
  register: async (data) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    return {
      success: true,
      user: {
        id: "usr_67890",
        name: data.name || "New User",
        email: data.email,
        role: "user",
        healthPoints: 0
      },
      token: "mock_jwt_token_safebite_67890"
    };
  },
  
  refreshToken: async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    return {
      success: true,
      token: "mock_jwt_token_safebite_refreshed"
    };
  }
};
