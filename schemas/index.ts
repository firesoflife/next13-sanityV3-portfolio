import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import project from './project'
import machine from './machine'
import storage from './hardware_components/storage'
import virtualMachine from './hardware_components/virtualMachine'
import cooling from './hardware_components/cooling'
import peripheral from './hardware_components/peripheral'
import sampleMachine from './Samples/sampleMachine'
import motherboardSpecs from './Samples/sampleMobo'

export const schemaTypes = [post, author, category, blockContent, project, machine, storage, virtualMachine, cooling, peripheral, sampleMachine, motherboardSpecs]
