export const useResponse = () => {
  const successResponse = <T>(data: T) => {
    return {
      success: true,
      data,
    };
  };

  const errorResponse = (message: string, code: string) => {
    return {
      success: false,
      message,
      code,
      data: null,
    };
  };

  return {
    successResponse,
    errorResponse,
  };
};
