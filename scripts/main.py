import fred_module_Joel

key = "623765da-31dd-384c-a5d3-2469016df6ac"
print("Hello, Python!")
text = "F ir e S h ie l d 4th-level evocation Casting Time: 1 action Range: S elf Components: V, S, M (a bit of phosphorus or a firefly) Duration: 10 minutes Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dism iss it. The flames provide you with a warm shield or a chill shield, as you choose. The w arm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield. "

fred_module_Joel.generateRDF(text, "my_output.rdf")
# graph = "my_output.rdf"
# fred_module_Joel.checkFredSentence(
#     "What happens to worn or carried items", key, graph)
# # create an instance of the API class
# api_instance = swagger_client.DefaultApi()
# # String | The prefix used for the namespace of terms introduced by FRED in the output. If not specified fred: is used as default. (optional)
# prefix = "prefix_example"
# # String | The namespace used for the terms introduced by FRED in the output. If not specified http://www.ontologydesignpatterns.org/ont/fred/domain.owl# is used as default. (optional)
# namespace = "namespace_example"
# # Boolean | Perform Word Sense Disambiguation on input terms. By default it is set to false. (optional)
# wsd = true
# # Boolean | Perform Word Frame Disambiguation on input terms in order to provide alignments to WordNet synsets, WordNet Super-senses and Dolce classes. By default it is set to false. (optional)
# wfd = true
# # String | The profile associated with the Word Frame Disambiguation (optional) (default to b)
# wfdProfile = wfdProfile_example
# # Boolean | Include temporal relations between events according to their grammatical tense. By default it is set to false. (optional)
# tense = true
# # Boolean | Use FrameNet roles into the resulting ontology. By default it is set to false. (optional)
# roles = true
# # String | The vocabulary used for annotating the text in RDF. Two possible alternatives are available, i.e. EARMARK and NIF. (optional) (default to earmark)
# textannotation = textannotation_example
# # Boolean | Generate a RDF which only expresses the semantics of a sentence without additional RDF triples, such as those containing text spans, part-of-speeches, etc. By default it is set to false. (optional)
# semanticSubgraph = true

# try:
#     api_instance.stlabToolsFredGet(text, prefix=prefix, namespace=namespace, wsd=wsd, wfd=wfd, wfdProfile=wfdProfile,
#                                    tense=tense, roles=roles, textannotation=textannotation, semanticSubgraph=semanticSubgraph)
# except ApiException as e:
#     print("Exception when calling DefaultApi->stlabToolsFredGet: %s\n" % e)
# # fred_module_Joel.getFredGraph(text, "my_output.rdf")
# # getFredGraph
# # openFredGraph
# # print(text)
# #
