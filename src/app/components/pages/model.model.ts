export class DevisModel {
    id: any;
    EntrepriseType: any;
    Activite: any;
    Effectifsalarier: any;
    Prenom: any;
    Nom: any;
    Telephone: any;
    Email: any;
    DateAjout:any;
}
export class Contact {
    id: any;
    civilite: any;
    Prenom: any;
    Nom: any;
    Telephone: any;
    Email: any;
    Sujet: any;
    Message: any;
    DateAjout:any;
}
export class Newsletter {
    id: any;
    Email: any;
    DateAjout:any;
}

export interface EnvironmentConfiguration {
    env_name: string;
    production: boolean;
    apiKey:string;
}

export interface ResponseModel  {
    id:string;
    object: string;
    created:number;
    model:string;
    choices:choice[];
    modelUsage:usage;
}

export interface choice {
    text:string;
    index:number;
    logprobs:any;
    finish_reason:string;
}

export interface usage {
    prompt_tokens:number;
    completion_tokens: number;
    total_tokens:number;
}

export interface ChatWithBot {
    person: string;
    response: string;
    cssClass:string;
}


export const gptModels = [
    {
        'model':'text-davinci-003',
        'description':'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.',
        'maxRequest':'4,000 tokens'
    },
    {
        'model':'text-curie-001',
        'description':'Very capable, but faster and lower cost than Davinci.',
        'maxRequest':'2,048 tokens'
    },
    {
        'model':'text-babbage-001',
        'description':'Capable of straightforward tasks, very fast, and lower cost.',
        'maxRequest':'2,048 tokens'
    },
    {
        'model':'text-ada-001',
        'description':'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
        'maxRequest':'2,048 tokens'
    }
]
