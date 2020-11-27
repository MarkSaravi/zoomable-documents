/* eslint-disable import/extensions */

import { Sentences } from '../models/types';
import {
    END_OF_LINE,
  FIRST_SENTENCE_ID,
} from '../models/constants';

const PRE = '<pre style="background-color: #efefef; padding-bottom: 1rem">';

const firstexample: Sentences = {
    id: 'first-example-zoomable',
    sentences: [
        {
            id: 'first-example',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            },
            content:
`${PRE}
    t := i.(T)
</pre>`,
        },
        {
            id: 'first-example-zoom-1',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            },
            content:
`${PRE}
    var i interface{} = "hello"

    s := i.(string)
    fmt.Println(s)
        
    f := i.(float64) // panic
    fmt.Println(f)
</pre>`,
        },
        {
            id: 'first-example-zoom-1',
            positions: {
                2: { after: FIRST_SENTENCE_ID },
            },
            content:
`${PRE}
    package main

    import "fmt"

    func main() {
        var i interface{} = "hello"

        s := i.(string)
        fmt.Println(s)
            
        f := i.(float64) // panic
        fmt.Println(f)
    }
</pre>`,
        },
    ],
};

const typeassertion: Sentences = {
    id: 'type-assertion-id',
    sentences: [
        {
            id: 'main-defenition',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
                1: { after: FIRST_SENTENCE_ID },
            },
            content: 'A type assertion provides access to an interface value\'s underlying concrete value.'
        },
        {
            id: 'main-defenition-eol',
            positions: {
                0: { after: 'main-defenition' },
                1: { after: 'main-defenition' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'first-example-obj',
            positions: {
                0: { after: 'main-defenition-eol' },
                1: { after: 'main-defenition-eol' },
            },
            content: firstexample,
        },
        {
            id: 'panic-without-second-param',
            content: 'The above example asserts that the interface value i holds the concrete type T and assigns the underlying T value to the variable t. If i does not hold a T, the statement will trigger a panic. <b><i>Zoom above example to see panic and full program.</i></b>',
            positions: {
                1: {
                    after: 'first-example-obj',
                },
            }
        },
        {
            id: 'first-example-obj-eol',
            positions: {
                0: { after: 'first-example-obj' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'assertion-succeeded',
            positions: {
                0: { after: 'first-example-obj-eol' },
            },
            content: 'If the interface does not hold the specific type it triggers panic. To avoid panic we can use the following pattern.',
        },
        {
            id: 'assertion-succeeded-eol',
            positions: {
                0: { after: 'assertion-succeeded' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'second-example',
            content: '<pre>t, ok := i.(T)</pre>',
            positions: {
                0: { after: 'assertion-succeeded-eol' },
            },
        }
    ],
};

export default typeassertion;
