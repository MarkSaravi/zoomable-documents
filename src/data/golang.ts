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
            id: 'first-example-zoom-2',
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

const secondexample: Sentences = {
    id: 'second-example-zoomable',
    sentences: [
        {
            id: 'second-example',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            },
            content:
                `${PRE}
    t, ok := i.(T)
                </pre>`,
        },
        {
            id: 'second-example-zoom-1',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            },
            content:
                `${PRE}
    var i interface{} = "hello"

    s, ok := i.(string)
    fmt.Println(s, ok)

    f, ok := i.(float64)
    fmt.Println(f, ok)
                </pre>`,
        },
        {
            id: 'second-example-zoom-2',
            positions: {
                2: { after: FIRST_SENTENCE_ID },
            },
            content:
                `${PRE}
    package main

    import "fmt"

    func main() {
        var i interface{} = "hello"

        s, ok := i.(string)
        fmt.Println(s, ok)
    
        f, ok := i.(float64)
        fmt.Println(f, ok)
    }
                </pre>`,
        },
        {
            id: 'second-example-zoom-1-eol',
            content: END_OF_LINE,
            positions: {
                1: { after: 'second-example-zoom-1' },
                2: { after: 'second-example-zoom-2' },
            },
        },
        {
            id: 'second-example-zoom-sentence',
            content: 'To test whether an interface value holds a specific type, a type assertion can return two values: the underlying value and a boolean value that reports whether the assertion succeeded.',
            positions: {
                1: { after: 'second-example-zoom-1-eol' },
                2: { after: 'second-example-zoom-1-eol' },
            }
        },
        {
            id: 'second-example-zoom-sentence-eol',
            content: END_OF_LINE,
            positions: {
                1: { after: 'second-example-zoom-sentence' },
                2: { after: 'second-example-zoom-sentence' },
            }
        },
        {
            id: 'second-example-zoom-sentence-2',
            content: `If i holds a T, then t will be the underlying value and ok will be true.<br>

            If not, ok will be false and t will be the zero value of type T, and no panic occurs.<br>
            
            Note the similarity between this syntax and that of reading from a map.`,
            positions: {
                1: { after: 'second-example-zoom-sentence-eol' },
                2: { after: 'second-example-zoom-sentence-eol' },
            }
        },
    ],
};

const typeswitchexample: Sentences = {
    id: 'typeswitch-example-zoomable',
    sentences: [
        {
            id: 'typeswitch-example',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            },
            content:
                `${PRE}
    func do(i interface{}) {
        switch v := i.(type) {
        case int:
            fmt.Printf("Twice %v is %v\\n", v, v*2)
        case string:
            fmt.Printf("%q is %v bytes long\\n", v, len(v))
        default:
            fmt.Printf("I don't know about type %T!\\n", v)
        }
    }
                </pre>`,
        },
        {
            id: 'typeswitch-example-zoom-1',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
            },
            content:
                `${PRE}
    package main
    
    import "fmt"

    func do(i interface{}) {
        switch v := i.(type) {
        case int:
            fmt.Printf("Twice %v is %v\\n", v, v*2)
        case string:
            fmt.Printf("%q is %v bytes long\\n", v, len(v))
        default:
            fmt.Printf("I don't know about type %T!\\n", v)
        }
    }

    func main() {
        do(21)
        do("hello")
        do(true)
    }
                </pre>`,
        },
    ],
};

const typeswitche: Sentences = {
    id: 'type-switch',
    sentences: [
        {
            id: 'typeswitch-description',
            content: 'You can use type assertion with <b>Type Switch</b>',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'typeswitch-level-1-title',
            content: '<h4>Type Switch</h4>',
            positions: {
                1: { after: FIRST_SENTENCE_ID },
                2: { after: FIRST_SENTENCE_ID },
            }
        },
        {
            id: 'typeswitch-level-1',
            content: 'A type switch is a construct that permits several type assertions in series.',
            positions: {
                1: { after: 'typeswitch-level-1-title' },
                2: { after: 'typeswitch-level-1-title' },
            }
        },
        {
            id: 'typeswitch-level-2-top-sentence',
            content: 'A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value.',
            positions: {
                2: { after: 'typeswitch-level-1' },
            }
        },
        {
            id: 'typeswitch-level-eol',
            content: END_OF_LINE,
            positions: {
                1: { after: 'typeswitch-level-1' },
                2: { after: 'typeswitch-level-2-top-sentence' },
            }
        },
        {
            id: 'type-switch-example-obj',
            content: typeswitchexample,
            positions: {
                1: { after: 'typeswitch-level-eol' },
                2: { after: 'typeswitch-level-eol' },
            },
        },
        {
            id: 'typeswitch-level-2-bot-sentence',
            content: 'The declaration in a type switch has the same syntax as a type assertion i.(T), but the specific type T is replaced with the keyword type.',
            positions: {
                2: { after: 'type-switch-example-obj' },
            },
        },
    ]
};

const typeassertion: Sentences = {
    id: 'type-assertion-id',
    sentences: [
        {
            id: 'type-assertion-title',
            positions: {
                0: { after: FIRST_SENTENCE_ID },
                1: { after: FIRST_SENTENCE_ID },
            },
            content: '<h4>Type Assertion</h4>'
        },
        {
            id: 'main-defenition',
            positions: {
                0: { after: 'type-assertion-title' },
                1: { after: 'type-assertion-title' },
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
            content: 'If the interface does not hold the specific type it triggers panic.',
        },
        {
            id: 'assertion-succeeded-2',
            positions: {
                0: { after: 'assertion-succeeded' },
                1: { after: 'panic-without-second-param' },
            },
            content: ' To avoid panic we can use the following pattern.',
        },
        {
            id: 'assertion-succeeded-look-below-example',
            content: ' Zoom below example',
            positions: {
                1: { after: 'assertion-succeeded-2' }
            }
        },
        {
            id: 'assertion-succeeded-eol',
            positions: {
                0: { after: 'assertion-succeeded-2' },
                1: { after: 'assertion-succeeded-look-below-example' },
            },
            content: END_OF_LINE,
        },
        {
            id: 'second-example',
            content: secondexample,
            positions: {
                0: { after: 'assertion-succeeded-eol' },
                1: { after: 'assertion-succeeded-eol' },
            },
        },
        {
            id: 'second-example-eol',
            content: END_OF_LINE,
            positions: {
                0: { after: 'second-example' },
                1: { after: 'second-example' },
            },
        },
        {
            id: 'type-switch-obj',
            content: typeswitche,
            positions: {
                0: { after: 'second-example-eol' },
                1: { after: 'second-example-eol' },
            }
        }
    ],
};

export default typeassertion;
