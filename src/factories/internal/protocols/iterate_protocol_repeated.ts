import { IMetadataTag } from "../../../metadata/IMetadataTag";
import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { IProtocolMap } from "../../../messages/IProtocolMap";
import { IProtocolMessage } from "../../../messages/IProtocolMessage";
import { ProtocolMetadataUtil } from "./ProtocolMetadataUtil";
import { emplace_protocol_object } from "./emplace_protocol_object";
import { iterate_protocol_metadata } from "./iterate_protocol_metadata";

export const iterate_protocol_repeated =
    (container: "Array" | "Set") =>
    (sole: boolean, bucket: boolean) =>
    (dict: Map<string, IProtocolMessage>) =>
    (meta: Metadata) =>
    (tags: IMetadataTag[]): string | IProtocolMap => {
        sole &&= ProtocolMetadataUtil.standalone(meta);
        if (sole === true)
            return iterate_protocol_metadata(dict)(meta)(tags).oneOf[0]!.type;

        const obj: MetadataObject = ProtocolMetadataUtil.object(
            `${container}.${bucket ? "Element" : "Wrapper"}<${meta.getName()}>`,
            dict.size,
        );
        obj.properties.push(
            ProtocolMetadataUtil.property(
                "value",
                bucket ? meta : ProtocolMetadataUtil.array(meta),
                tags,
            ),
        );
        emplace_protocol_object(dict)(obj);
        return obj.name;
    };
