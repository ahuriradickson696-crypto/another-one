import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, User, Award, Building2, X } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { staffDirectory } from '@/data/staffDirectory';

// Real data only — from staffDirectory.ts (201 entries from 2026 Graduation Book)
const findPerson = (roleKeyword: string) => {
  const m = staffDirectory.find((s) =>
    s.role.toLowerCase().includes(roleKeyword.toLowerCase())
  );
  return m ? { name: m.name, role: m.role, dept: m.dept } : null;
};

type Node = {
  id: string;
  title: string;
  role: string;
  detail: string;
  color: string;
  icon: string;
  children?: Node[];
};

const orgTree: Node = {
  id: 'founders',
  title: 'General Meeting of Founders',
  role: 'Founding Members',
  detail:
    'Supreme authority of the university company. Appoints the Board of Directors, approves constitutional changes, and sets the institutional mandate.',
  color: '#1e1b4b',
  icon: '🏛️',
  children: [
    {
      id: 'board',
      title: 'Board of Directors',
      role: 'Chairperson, Board of Directors',
      detail:
        'Fiduciary and strategic oversight. Approves annual budgets, major capital projects, senior appointments, and long-term strategy.',
      color: '#2d1454',
      icon: '📊',
      children: [
        {
          id: 'chancellor',
          title: 'Chancellor',
          role: 'Chancellor',
          detail:
            'Ceremonial head of the university. Confers degrees at congregation, represents AVIU at state and diplomatic functions.',
          color: '#3d1a6b',
          icon: '🎓',
          children: [
            {
              id: 'council',
              title: 'University Council',
              role: 'Chairperson, University Council',
              detail:
                'Supreme policy-making body. Approves academic programmes, budgets, senior appointments. Ensures full compliance with NCHE standards.',
              color: '#4c1d95',
              icon: '⚖️',
              children: [
                {
                  id: 'vc',
                  title: 'Vice Chancellor',
                  role: 'Vice Chancellor',
                  detail:
                    'Chief executive and academic officer. Reports to Council. Provides strategic leadership across all operations.',
                  color: '#5b21b6',
                  icon: '👔',
                  children: [
                    {
                      id: 'secretary',
                      title: 'University Secretary',
                      role: 'University Secretary',
                      detail:
                        'Secretary to Council. Custodian of legal records, statutory compliance and governance documentation.',
                      color: '#6d28d9',
                      icon: '📋',
                    },
                    {
                      id: 'senate',
                      title: 'Senate',
                      role: 'Senate',
                      detail:
                        'Supreme academic authority. Approves curricula, examination results, research policy and admission standards. Chaired by the Vice Chancellor.',
                      color: '#6d28d9',
                      icon: '📚',
                      children: [
                        {
                          id: 'registrar',
                          title: 'Academic Registrar',
                          role: 'Academic Registrar',
                          detail:
                            'Secretary to Senate. Manages student records, examinations, admissions and academic ceremonies.',
                          color: '#7c3aed',
                          icon: '🎓',
                        },
                        {
                          id: 'deans',
                          title: 'Faculty Deans',
                          role: 'Dean',
                          detail:
                            'Lead academic programmes across AVIU faculties: Education, Business & ICT, Health Sciences, Law, Engineering.',
                          color: '#7c3aed',
                          icon: '🏫',
                        },
                      ],
                    },
                    {
                      id: 'qa',
                      title: 'Quality Assurance Director',
                      role: 'Quality Assurance Director',
                      detail:
                        'Internal QA, NCHE compliance audits, institutional quality frameworks and benchmarking.',
                      color: '#6d28d9',
                      icon: '✓',
                    },
                    {
                      id: 'bursar',
                      title: 'University Bursar',
                      role: 'University Bursar',
                      detail:
                        'Finance, accounting, budgeting, financial reporting and asset management.',
                      color: '#6d28d9',
                      icon: '💰',
                    },
                    {
                      id: 'dos',
                      title: 'Dean of Students',
                      role: 'Dean of Students',
                      detail:
                        'Student welfare, discipline, guild oversight, accommodation and student services.',
                      color: '#6d28d9',
                      icon: '👥',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

type FlatNode = {
  node: Node;
  level: number;
  parentId?: string;
  isLast?: boolean;
  hasChildren?: boolean;
};

function flattenTree(
  node: Node,
  level = 0,
  parentId?: string,
  isLast = true
): FlatNode[] {
  const result: FlatNode[] = [
    { node, level, parentId, isLast, hasChildren: !!node.children?.length },
  ];
  if (node.children) {
    node.children.forEach((child, i) => {
      result.push(
        ...flattenTree(child, level + 1, node.id, i === node.children!.length - 1)
      );
    });
  }
  return result;
}

export function OrgChart() {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(['founders', 'board', 'chancellor', 'council', 'vc'])
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile via matchMedia
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const toggleExpand = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  const flatNodes = flattenTree(orgTree);
  const visibleNodes = flatNodes.filter((f) => {
    if (f.level === 0) return true;
    let parent = f.parentId;
    while (parent) {
      if (!expanded.has(parent)) return false;
      const parentNode = flatNodes.find((fn) => fn.node.id === parent);
      parent = parentNode?.parentId;
    }
    return true;
  });

  const selectedNode = selectedId
    ? flatNodes.find((f) => f.node.id === selectedId)?.node
    : null;

  const renderDetails = () => {
    if (!selectedNode) {
      return (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <Building2 size={48} color="#c4b5fd" style={{ margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '16px', color: '#2d1454', margin: '0 0 8px' }}>
            {isMobile ? 'Tap any node' : 'Click any node in the tree'}
          </h3>
          <p
            style={{
              fontSize: '13px',
              color: '#8a7fa0',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            See full details about the role, responsibilities, current holder and
            reporting relationships.
          </p>
        </div>
      );
    }

    const person = findPerson(selectedNode.role);

    return (
      <>
        <div
          style={{
            display: 'inline-block',
            background: selectedNode.color,
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}
        >
          Position
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: selectedNode.color + '15',
              color: selectedNode.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              flexShrink: 0,
            }}
          >
            {selectedNode.icon}
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: '20px',
              color: '#2d1454',
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {selectedNode.title}
          </h3>
        </div>

        {person ? (
          <div
            style={{
              background: '#f9f6fd',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              borderLeft: '4px solid ' + selectedNode.color,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              <User size={14} color={selectedNode.color} />
              <span
                style={{
                  fontSize: '11px',
                  color: '#8a7fa0',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Current Holder
              </span>
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#2d1454',
                marginBottom: '4px',
              }}
            >
              {person.name}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Award size={12} color="#8a7fa0" />
              <span style={{ fontSize: '12px', color: '#8a7fa0' }}>
                {person.role} · {person.dept}
              </span>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: '#f9f6fd',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#8a7fa0',
              fontSize: '13px',
              fontStyle: 'italic',
            }}
          >
            Position vacant or filled by a committee
          </div>
        )}

        <div>
          <div
            style={{
              fontSize: '11px',
              color: '#8a7fa0',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '8px',
            }}
          >
            Role &amp; Responsibilities
          </div>
          <p
            style={{
              fontSize: '14px',
              color: '#5a4b6b',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {selectedNode.detail}
          </p>
        </div>

        {selectedNode.children && selectedNode.children.length > 0 && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid #f0e8fa',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                color: '#8a7fa0',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              Reports To Them
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedNode.children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => setSelectedId(child.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 12px',
                    background: '#f9f6fd',
                    border: '1px solid #e0d4ee',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '13px',
                    color: '#2d1454',
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    minHeight: '44px',
                  }}
                >
                  <span>{child.icon}</span>
                  <span style={{ flex: 1 }}>{child.title}</span>
                  <ChevronRight size={14} color="#8a7fa0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div
      style={{
        background: '#f9f6fd',
        minHeight: '100vh',
        paddingBottom: '60px',
      }}
    >
      <SubPageHero
        images={pageImages.about}
        eyebrow="Governance"
        title={
          <>
            University <em>Organisation</em>
          </>
        }
        subtitle="AVIU's governance structure aligned with the Universities and Other Tertiary Institutions Act (2001) and NCHE standards."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Organisation', path: '/about/organisation' },
        ]}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '40px 16px 60px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              color: '#2d1454',
              margin: '0 0 12px',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            NCHE-Compliant Governance Tree
          </h2>
          <p
            style={{
              color: '#5a4b6b',
              fontSize: '15px',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {isMobile
              ? 'Tap any node to expand, collapse, or view full details.'
              : 'Click any node to expand or collapse. Click a card to see full role details.'}
          </p>
        </div>

        {/* On mobile: single column. On desktop: two-column with sticky details. */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 2fr) minmax(0, 1fr)',
            gap: '24px',
          }}
        >
          {/* TREE */}
          <div
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: isMobile ? '20px 16px' : '32px',
              border: '1px solid #e0d4ee',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              overflowX: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '2px solid #f0e8fa',
                flexWrap: 'wrap',
              }}
            >
              <Building2 size={22} color="#3d1a6b" />
              <h3
                style={{
                  margin: 0,
                  fontSize: '16px',
                  color: '#2d1454',
                  fontWeight: 700,
                }}
              >
                Hierarchy Tree
              </h3>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '12px',
                  color: '#8a7fa0',
                }}
              >
                {visibleNodes.length} of {flatNodes.length} nodes
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: isMobile ? '0' : '400px',
              }}
            >
              {visibleNodes.map(({ node, level, hasChildren }, idx) => {
                const isExpanded = expanded.has(node.id);
                const isSelected = selectedId === node.id;
                const person = findPerson(node.role);
                const indent = level * (isMobile ? 14 : 40);

                return (
                  <div
                    key={node.id}
                    style={{
                      display: 'flex',
                      alignItems: 'stretch',
                      marginLeft: `${indent}px`,
                      position: 'relative',
                    }}
                  >
                    {level > 0 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: isMobile ? '-8px' : '-20px',
                          top: 0,
                          bottom: 0,
                          width: isMobile ? '8px' : '20px',
                          borderLeft: '2px dashed #c4b5fd',
                          borderBottom:
                            idx === visibleNodes.length - 1
                              ? 'none'
                              : '2px dashed #c4b5fd',
                        }}
                      />
                    )}

                    <button
                      onClick={() => hasChildren && toggleExpand(node.id)}
                      disabled={!hasChildren}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: hasChildren ? node.color : '#f0e8fa',
                        color: hasChildren ? '#fff' : '#c4b5fd',
                        border: 'none',
                        cursor: hasChildren ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '14px',
                        marginRight: '10px',
                        minWidth: '32px',
                      }}
                    >
                      {hasChildren ? (
                        isExpanded ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )
                      ) : (
                        '·'
                      )}
                    </button>

                    <div
                      onClick={() => setSelectedId(node.id)}
                      style={{
                        flex: 1,
                        background: isSelected ? node.color + '10' : '#f9f6fd',
                        border: '2px solid',
                        borderColor: isSelected ? node.color : node.color + '30',
                        borderRadius: '12px',
                        padding: isMobile ? '12px' : '12px 16px',
                        cursor: 'pointer',
                        marginBottom: '4px',
                        minHeight: '44px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}
                      >
                        <span style={{ fontSize: isMobile ? '18px' : '20px' }}>
                          {node.icon}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: '14px',
                              fontWeight: 700,
                              color: '#2d1454',
                              marginBottom: '2px',
                              lineHeight: 1.3,
                            }}
                          >
                            {node.title}
                          </div>
                          {person && (
                            <div
                              style={{
                                fontSize: '12px',
                                color: node.color,
                                fontWeight: 600,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {person.name}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DETAILS — sticky on desktop only */}
          {!isMobile && (
            <div
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid #e0d4ee',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                position: 'sticky',
                top: '20px',
                alignSelf: 'flex-start',
                height: 'fit-content',
              }}
            >
              {renderDetails()}
            </div>
          )}
        </div>

        {/* On mobile: details shown as a bottom-sheet modal when a node is tapped */}
        {isMobile && selectedNode && (
          <div
            onClick={() => setSelectedId(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff',
                borderRadius: '20px 20px 0 0',
                width: '100%',
                maxWidth: '640px',
                maxHeight: '85vh',
                overflowY: 'auto',
                padding: '24px 20px 32px',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.25)',
                animation: 'slideUp 0.2s ease-out',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '4px',
                    background: '#e0d4ee',
                    borderRadius: '999px',
                    margin: '0 auto',
                  }}
                />
                <button
                  onClick={() => setSelectedId(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 8,
                    color: '#8a7fa0',
                  }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              {renderDetails()}
            </div>
          </div>
        )}

        {/* NCHE COMPLIANCE */}
        <div
          style={{
            background: 'linear-gradient(135deg, #2d1454 0%, #4c1d95 100%)',
            borderRadius: '20px',
            padding: isMobile ? '32px 20px' : '40px',
            marginTop: '40px',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
          <h3
            style={{
              fontSize: isMobile ? '20px' : '22px',
              margin: '0 0 12px',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            NCHE Compliant Governance Structure
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#c4b5fd',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            AVIU's governance structure aligns with the Universities and Other
            Tertiary Institutions Act (2001) and NCHE standards. All statutory
            positions — Chancellor, Council, Senate, Vice Chancellor — are
            established and functioning.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}