import { $clone } from "../../functional/$clone";

import { ClassProperties } from "../../typings/ClassProperties";

import { IMetadataTuple } from "./IMetadataTuple";
import { IMetadataTypeTag } from "./IMetadataTypeTag";
import { MetadataTupleType } from "./MetadataTupleType";

export class MetadataTuple {
    public readonly type: MetadataTupleType;
    public readonly tags: IMetadataTypeTag[][];

    /**
     * @internal
     */
    private constructor(props: ClassProperties<MetadataTuple>) {
        this.type = props.type;
        this.tags = props.tags;
    }

    public static create(props: ClassProperties<MetadataTuple>): MetadataTuple {
        return new MetadataTuple(props);
    }

    public toJSON(): IMetadataTuple {
        return {
            type: this.type.toJSON(),
            tags: $clone(this.tags),
        };
    }
}
