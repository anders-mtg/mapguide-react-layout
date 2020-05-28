import * as React from "react";
import { InitError } from "../api/common";
import { isError, isInitError } from "../utils/type-guards";
import Alert, { AlertTitle, AlertMessage } from 'calcite-react/Alert';

/**
 * Error component props
 *
 * @export
 * @interface IErrorProps
 */
export interface IErrorProps {
    error: Error | InitError | string;
    errorRenderer?: (err: Error | InitError) => JSX.Element;
}

/**
 * Returns a normalized stack trace for the given error object
 *
 * @export
 * @param {(Error|InitError)} err
 * @returns {string[]}
 */
export function normalizeStack(err: Error | InitError): string[] {
    let stack: string[];
    if (err.stack instanceof Array) {
        stack = err.stack || [];
    } else if (typeof (err.stack) == 'string') {
        stack = (err.stack || "").split("\n");
    } else {
        stack = [];
    }
    return stack;
}

/**
 * The Error component displays an error object in a nicely formatted manner
 * @param props
 */
export const Error = (props: IErrorProps) => {
    const err = props.error;
    if (isError(err) || isInitError(err)) {
        if (props.errorRenderer) {
            return props.errorRenderer(err);
        } else {
            const message = err.message;
            const stack = normalizeStack(err);
            return <Alert red showIcon>
                <AlertTitle>{err.message}</AlertTitle>
                <AlertMessage>
                    <ul className="error-stack">
                        {stack.map((ln, i) => <li key={`stack-line-${i}`}>{ln}</li>)}
                    </ul>
                </AlertMessage>
            </Alert>;
        }
    } else {
        return <Alert red showIcon>
            <AlertTitle>{err}</AlertTitle>
        </Alert>;
    }
};