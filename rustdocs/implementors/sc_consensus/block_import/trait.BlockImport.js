(function() {var implementors = {
"fc_consensus":[["impl&lt;B, I, C&gt; BlockImport&lt;B&gt; for <a class=\"struct\" href=\"fc_consensus/struct.FrontierBlockImport.html\" title=\"struct fc_consensus::FrontierBlockImport\">FrontierBlockImport</a>&lt;B, I, C&gt;<span class=\"where fmt-newline\">where\n    B: BlockT,\n    I: BlockImport&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    I::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;ConsensusError&gt;,\n    C: ProvideRuntimeApi&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    C::Api: BlockBuilderApi&lt;B&gt; + EthereumRuntimeRPCApi&lt;B&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()