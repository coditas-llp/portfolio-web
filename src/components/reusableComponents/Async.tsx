import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";

interface IAsyncProps {
  promise: () => void;
  loader?: JSX.Element;
  content?: JSX.Element;
  error?: JSX.Element;
}

export const Async = (props: IAsyncProps) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getData = async () => {
    try {
      await props?.promise();
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !hasError && props.content}
      {hasError && !isLoading && props.error}
    </div >
  );
};
