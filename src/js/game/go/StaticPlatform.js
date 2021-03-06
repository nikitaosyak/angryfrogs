import {
    INamedObject, IStaticBody, ITiledMesh, ITypedObject,
    ObjectType
} from "./GameObjectBase";

export const StaticPlatform = (name, texture, x, y, w, h, tint, physicsMask) => {
    const self = {}

    Object.assign(self, ITypedObject(ObjectType.PLATFORM))
    Object.assign(self, INamedObject(name))
    Object.assign(self, ITiledMesh(texture, x, y, w, h, tint))
    Object.assign(self, IStaticBody(self, physicsMask))

    return self
}