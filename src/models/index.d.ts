import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Vendor {
  readonly id: string;
  readonly name?: string;
  readonly url?: string;
  readonly phone?: string;
  readonly description?: string;
  constructor(init: ModelInit<Vendor>);
  static copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}