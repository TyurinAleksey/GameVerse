import React, { useState } from 'react';
import ErrorMessage from '@components/ErrorMessage';

export const withErrorApi = View => {
    return props => {
        const [errorAPI, setErrorApi] = useState(false);
        return (
            <>
                {errorAPI
                    ? <ErrorMessage />
                    : (
                        <View 
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}